"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Trang Phan
   Date: 06/06/2023   
   
   Filename: hg_report.js
	
*/
var gameReport =
  "<h1>" +
  itemTitle +
  "</h1>" +
  "<h2>By: " +
  itemManufacturer +
  "</h2>" +
  "<img src='hg_" +
  itemID +
  ".png' alt=" +
  itemID +
  " id=gameImg />" +
  "<table>" +
  "<tr><th>" +
  itemID +
  "</th><td>id</td></tr>" +
  "<tr><th>" +
  itemPrice +
  "</th><td>price</td></tr>" +
  "<tr><th>" +
  itemPlatform +
  "</th><td>platform</td></tr>" +
  "<tr><th>" +
  itemESRB +
  "</th><td>esrb</td></tr>" +
  "<tr><th>" +
  itemCondition +
  "</th><td>condition</td></tr>" +
  "<tr><th>" +
  itemRelease +
  "</th><td>release</td></tr>" +
  "</table>" +
  itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingsSum = 0;
var ratingsCount = ratings.length;
for (var i = 0; i < ratings.length; i++) {
  ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;

var ratingReport =
  "<h1>Customer Reviews</h1>" +
  "<h2>" +
  ratingsAvg +
  "out of 5 stars ( " +
  ratingsCount +
  " reviews)</h2>";

for (var i = 0; i < 3; i++) {
  ratingReport +=
    "<div class='review'>" +
    "<h1>" +
    ratingTitles[i] +
    "</h1>" +
    "<table>" +
    "<tr><th>By</th><td>" +
    ratingAuthors[i] +
    "</td></tr>" +
    "<tr><th>Review Date</th><td>" +
    ratingDates[i] +
    "</td></tr>" +
    "<tr><th>Rating</th><td>";
  for (var j = 0; j < ratings[i]; j++) {
    ratingReport += "<img src='hg_star.png' />";
  }
  ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
