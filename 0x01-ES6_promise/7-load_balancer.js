export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value)
    .catch(() => Promise.reject(Error('Error')));
}
