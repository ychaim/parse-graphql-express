export default function getSessionToken(req) {
  const authorizationHeader = req.headers && req.headers.authorization;
  if (!authorizationHeader) {
    return null;
  }

  const pieces = authorizationHeader.split(' ');
  if (pieces.length !== 2) {
    return null;
  }

  const [key, sessionToken] = pieces;
  if (key !== 'Bearer') {
    return null;
  }

  return sessionToken;
}
