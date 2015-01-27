/**
 * Created by tolanuch on 25.01.15.
 */
(function(d)
{
  var slideContainer=d.querySelector('.clients__list-container');
  var slidesCount=d.querySelector('.clients__list-container').children.length;
  var slideSelected;
  var sliderWidth= d.querySelector('.clients__slider').offsetWidth;

  getIndex=function()
  {
    var i;
    for (i=0; i<slidesCount;i++)
    {
      var indexName=slideContainer.children[i].className;
      if (indexName=="clients__list list-showed")
      {
        slideSelected = i;
        break;
      }
    }
    slideContainer.children[slideSelected].classList.remove('list-showed');
  }

  d.querySelector('.btn__right').onclick=function(e)
  {
    getIndex();
    if (slideSelected==(slidesCount-1)) slideSelected=-1;
    slideContainer.children[slideSelected+1].classList.add('list-showed');
    d.querySelector('.clients__slider_selector').style.left=(sliderWidth/(slidesCount-1)*(slideSelected+1))+'px';
  }

  d.querySelector('.btn__left').onclick=function(e)
  {
    getIndex();
    if (slideSelected==0) slideSelected=slidesCount;
    slideContainer.children[slideSelected-1].classList.add('list-showed');
    d.querySelector('.clients__slider_selector').style.left=(sliderWidth/(slidesCount-1)*(slideSelected-1))+'px';
  }

})(document);