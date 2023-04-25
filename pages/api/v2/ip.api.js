// using req.connection.remoteAddress property to get the remote address
export default function ipiAddressApi(req, res) {
  const ipAddress = req.connection.remoteAddress;
  res.status(200).send(ipAddress);
}
