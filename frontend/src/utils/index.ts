export function GetImageFromS3(imageLookupName: string, requestUrl: string, setImageSrc: Function): void {
  fetch(requestUrl)
    .then(async(res) => {
      if (!res.ok) {
        throw new Error("Error occured");
      }
      const data: any = res.json();
      return data;
    })
    .then((data) => {
      setImageSrc(imageLookupName, data.url)
    })
    .catch((err) => console.error("There was an issue: ", err));
}
