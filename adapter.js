(function(self){
   var _adapter = self.adapter;
   var adapter = function(){};
   if(isNodejs()){
     log("server");
     var cmdArray = process.argv.slice(2,process.argv.length);
     log(cmdArray);
   }else if(isBrowser()){
     log("client");
     var url = window.loaction.href;
     log(url);
   }
   self.adapter = adapter;

   function isNodejs() {
        return typeof exports !== 'undefined' && typeof module !== 'undefined' && typeof module.exports !== 'undefined';
    }
    function isBrowser() {
        return typeof window !== 'undefined' && typeof document !== 'undefined';
    }
    function log(){
      if(console&&console.log)
        console.log.apply(console,arguments);
    }
})(this)