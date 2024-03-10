export function GetImageFromS3(url: string, setImageSrc: Function): void {
  fetch(url)
    .then(async(res) => {
      if (!res.ok) {
        throw new Error("Error occured");
      }
      const data: any = res.json();
      return data;
    })
    .then((data) => {
      setImageSrc('speedRunEth', data.url)
    })
    .catch((err) => console.error("There was an issue: ", err));
}
