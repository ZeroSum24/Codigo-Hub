import { createPow } from '@textile/powergate-client';

const tokenKey = 'token'
const host = "https://grpcweb.hfs.textile.io";
// const host = "http://localhost:6002";
const PG = createPow( { host } );
let initialized = false;
// window.PG = PG;

export async function getPG() {
  let token = localStorage.getItem(tokenKey) || undefined;
  if (token == null) {
    console.log('No cached PG token, creating');
    const FFS = await PG.ffs.create();
    token = FFS.token ? FFS.token : null;
    localStorage[tokenKey] = token;
    PG.setToken(token);
  } else if (!initialized) {
    console.log('Found cached PG token, initializing client');
    PG.setToken(token);
    try {
      await PG.ffs.info();
      initialized = true;
      console.log('PG client successfully initialized');
    } catch (e) {
      console.error('PG client couldnt be initialized: '+ e);
      localStorage.removeItem(tokenKey);
      return getPG();
    }
  }
  return PG;
}

export async function upload(fileAsUint8Array) {
  const { cid } = await PG.ffs.stage(fileAsUint8Array);
  const { jobId } = await PG.ffs.pushStorageConfig(cid);
  return {cid: cid, jobId: jobId};
}

function getFirmwareAsByteBuffer(cid) {
  return PG.ffs.get(cid);
}

/**
 * @param {Uint8Array} uintarray fetched from filecoin
 * @return {*}
 */
function extractSourceCode(uintarray) {
  const view = new DataView(uintarray.buffer);
  const binaryStartByte = view.getInt32(0, false) + 4;
  return uintarray.slice(4, binaryStartByte);
}

/**
 * @param {Uint8Array} uintarray fetched from filecoin
 * @return {*}
 */
function extractBinary(uintarray) {
  const view = new DataView(uintarray.buffer);
  const binaryStartByte = view.getInt32(0, false) + 4;
  return uintarray.slice(binaryStartByte);
}

export async function downloadSourceCode(cid) {
  const uintarray = await getFirmwareAsByteBuffer(cid);
  const blob = new Blob([extractSourceCode(uintarray)], { type: 'text/plain' });
  return blob.text();
}

export async function downloadFirmware(cid) {
  const uintarray = await getFirmwareAsByteBuffer(cid);
  return extractBinary(uintarray);
}

export async function downloadFirmwareBinary(cid, filename, mimeType) {
  return downloadFirmware(cid).then(uintarray => {
    const blob = new Blob([uintarray], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.click();
  });
}

export async function removeFromFilecoin(cid) {
  return PG.ffs.remove(cid);
}