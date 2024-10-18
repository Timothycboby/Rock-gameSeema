import React from "react";

function Cards() {
  const data = [
    "https://i.pinimg.com/236x/32/6b/53/326b53e997083e7ecc32e7bd76b98fa7.jpg",
    "https://i.pinimg.com/236x/93/39/66/933966788602a72ac7ed5faa806a61e9.jpg",
    "https://i.pinimg.com/236x/32/6b/53/326b53e997083e7ecc32e7bd76b98fa7.jpg",
    "https://i.pinimg.com/236x/b1/fa/a2/b1faa25f8499f1edb5353e3109b91ad3.jpg",
    "https://i.pinimg.com/236x/0d/3a/2e/0d3a2e8e0a4a43dd0634206df232e445.jpg",
    "https://i.pinimg.com/236x/dd/58/c4/dd58c4f92c499fa3c0ef9e147dcda989.jpg",
    "https://i.pinimg.com/236x/a0/4f/bf/a04fbf616485e7ddaf0e26fe9e9858f2.jpg",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/2c6d5a46cdbceada277c870ce1c389ee.jpg",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/99e090d154caf30f3625df7e456d5984.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/847d61b3dd60e988a08848f4d0f6a26e.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/e89d4daa4c4b221db99025d10b707775.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/aa36401385a23a7c1a8e1ed3023d2f37.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/3c892779be9dabb3589586c83ad3eeed.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/283663f96801d2f9a5777caa5e577c82.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png   ",
  ];
  return (
    <div className="px-5 w-full h-full  flex flex-wrap gap-10 justify-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-40 rounded-xl h-48 bg-red-400  overflow-hidden hover:scale-110 duration-300 cursor-pointer"
        >
          <img src={item} className="h-full w-full" alt="" />
        </div>
      ))}
    </div>
  );
}

export default Cards;
