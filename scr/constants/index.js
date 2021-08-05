modules.exports = {
  mimeTypeFiles: {
    MAX_SIZE: 1024 * 1024 * 5,
    PHOTO_MIMETYPE: ["image/jpeg", "image/png", "image/pjpeg"],
  },
  statusCode: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    CONFLICT: 409,
    SERVER_ERROR: 500,
  },
  dirNames: {
    USER_PHOTOS: "userPhotos",
    CATEGORY_PHOTOS: "categoryPhotos",
  },
};
