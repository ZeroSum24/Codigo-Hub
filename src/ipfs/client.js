import * as IPFS from 'ipfs-mini';

const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export async function getFirmware(hash) {
  if (!hash) {
    return new Error('hash must be String');
  } else if (!hash.startsWith('Qm')) {
    return new Error('hash must start with "Qm"');
  }

  return new Promise((resolve, reject) => {
    ipfs.cat(hash, (err, result) => {
      if (err) reject(new Error(err));
      resolve(result);
    });
  });
}

export async function downloadFirmware(hash, filename) {
  return getFirmware(hash).then(base64Data => {
    const downloadLink = document.createElement('a');
    downloadLink.href = base64Data;
    downloadLink.download = filename;
    downloadLink.click();
  });
}

export async function encodeAndAddFirmware(buffer, datatype) {
  const type = datatype || 'application/octet-stream';
  return addRawFirmware(`data:${type};base64,` + Buffer.from(buffer).toString('base64'));
}


/**
 * Add an string or buffer to IPFS
 * @param {String|Buffer} `obj` a single string or buffer
 * @return {string} `cid` returns an IPFS hash string
 */
export async function addRawFirmware(obj) {
  const cid = await new Promise((resolve, reject) => {
    ipfs.add(obj, (err, result) => {
      if (err) reject(new Error(err));
      resolve(result);
    });
  });
  console.log('CID:', cid);
  return cid;
}