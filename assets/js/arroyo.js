// Typekit - Futura Meduium 
(function(d) {
var config = {
  kitId: 'lnh5uje',
  scriptTimeout: 3000,
  async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

      
$.ajax('/nav.html', {
  type: 'GET',
  success: function(data) {
     $('#navigation-holder').html(data);
  },
  error: function() {
     //$('#notification-bar').text('An error occurred');
  }
});

$.ajax('/nav-bottom.html', {
  type: 'GET',
  success: function(data) {
     $('#bottom-navigation-holder').after(data);
  },
  error: function() {
     //$('#notification-bar').text('An error occurred');
  }
});

$.ajax('/filter-nav.html', {
  type: 'GET',
  success: function(data) {
     $('#filter-navigation-holder').html(data);
  },
  error: function() {
     //$('#notification-bar').text('An error occurred');
  }
});