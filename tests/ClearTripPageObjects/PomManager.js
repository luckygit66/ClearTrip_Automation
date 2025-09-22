//const{ClearTripLandingPage}= require('./ClearTripLandingPage');
const{ctlandingpage, CtlandingPage}=require('./CtlandingPage')

class PomManager
{
 constructor(page)
 {
    this.page = page;
    this.ctlandingpage =new CtlandingPage(this.page)

 }

    getClearTriplandingPage()
    {
      return this.ctlandingpage;
    }
}

module.exports={PomManager}