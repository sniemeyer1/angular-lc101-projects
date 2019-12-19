import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"]
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Get a load of these guys";
  image1 =
    "https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png";
  image2 = "https://www.dropbox.com/s/gyhu5pyep8xh4ru/crazy.jpg?raw=1";
  image3 =
    "https://www.dropbox.com/s/k83zwdjr3xajhmp/488135_577317405072_1226552044_n.jpg?raw=1";

  constructor() {}

  ngOnInit() {}
}
