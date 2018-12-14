// ==UserScript==
// @name         kissanime Ad-Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes ads on Kissanime
// @author       Akash Aryal
// @match        http://kissanime.ru/*      //They like to change their url alot. Add additional match statement if the url changes
// @match        https://kissanime.ru/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==
var $ = window.jQuery;

$(document).ready(function() {

    //These are the standard [hide] ads at Kissanime's watch anime page.
    //Kissanime changes the id and classes of these from time to time thus
    //I have included six below that are fairly common and should cover most
    //of the ads in the watch anime page
    $('#adsIfrme11').remove();
    $('#adsIfrme6').remove();
    $('#adsIfrme7').remove();
    $('#adsIfrme1').remove();
    $('#adsIfrme3').remove();
    $('.mn-thumb__holder').remove();

    /*waitForKeyElements("#selectEpisodeContainer", actionFunction);
    function actionFunction () {
        $("#selectEpisodeContainer").append("<input id='updateAnime' type='button' value='Finished Episode' />");
        console.log('created');
        $('#updateAnime').click(function() {

            var jqxhr = $.getJSON( "https://api.jikan.moe/v3/user/nekomata1037", function(data) {
                var jso = data.favorites.anime;
                console.log(jso[0]);

            })

            });
    }*/
    //As of 12/13/2018 Kissanime only uses 2 divAds. Include more if necessary
    $('#divAds').remove();
    $('#divAds2').remove();

    //Kissanime adds a delay to the ads. waitForKeyElements ensures that the .remove() function hits an actual element
    //separated into three because not all all of these ads are in every page.

    //These two below remove the large banner like ads at the sides of the site by deleting it from the dom tree.
    //Clicking on the hide tags that correspond to these ads is also an option
    //however it is much slower as the delay for the hide tags are much longer
    //As of 12/13/2018 the majority of Kissianme's ads' are provide by the two companies. As soon as they get
    //another one or the src url changes, then this portion needs to be updated
    waitForKeyElements('img[src*="//c"]', actionFunction2);
    function actionFunction2 () {

         $('img[src*="//c"]').remove();

    }

    waitForKeyElements('img[src*="https://ssl"]', actionFunction4);
    function actionFunction4 () {

         $('img[src*="https://ssl"]').remove();

    }

    //gets rid of the hide tags on the banner ads.
    waitForKeyElements("b", actionFunction3);
    function actionFunction3 () {

        $('b').parent().remove();

    }



});
