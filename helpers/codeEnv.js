module.exports.serverSideRendering = (function(){
    try {
      return !(window !== undefined)
    } catch(e) {
      return true;
    }
  })()