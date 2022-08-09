export function CheckFileValidation(file: File | undefined) {
  if (!file?.size) {
    alert("사진 파일이 없습니다.");
    return false;
  }
  if (file.size > 10 * 1024 * 1024) {
    alert("파일이 너무 큽니다.(제한: 10MB)");
    return false;
  }
  if (
    !file.type.includes("png") &&
    !file.type.includes("jpeg") &&
    !file.type.includes("jpg")
  ) {
    alert("파일 확장자가 올바르지 않습니다.(png, jpg, jpeg만 가능)");
    return false;
  }
  return file;
}
