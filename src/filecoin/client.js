import { createPow, ffsTypes } from '@textile/powergate-client';

export const PG = createPow({ host: "http://pow.slate.textile.io:6002" });
let token = null;
let info = null;

export async function getPowerGateToken() {
  if (token != null) return token;
  const FFS = await PG.ffs.create();
  console.log(FFS);
  token = FFS.token ? FFS.token : null;
  PG.setToken(token);
  window.PG = PG;
  return token;
}

export async function getPowerGateInfo() {
  if (token === null) await getPowerGateToken();
  info = await PG.ffs.info();
  return info;
}

export async function upload(fileAsUint8Array) {
  const { cid } = await PG.ffs.stage(fileAsUint8Array);
  const { jobId } = await PG.ffs.pushStorageConfig(cid);
  PG.ffs.watchJobs((job) => {
    if (job.status === ffsTypes.JOB_STATUS_CANCELED) {
      console.log("job canceled")
    } else if (job.status === ffsTypes.JOB_STATUS_FAILED) {
      console.log("job failed")
    } else if (job.status === ffsTypes.JOB_STATUS_SUCCESS) {
      console.log("job success!")
    }
  }, jobId);
}
