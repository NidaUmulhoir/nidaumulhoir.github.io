const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

//Skill Bar
(function() {
  
    var SkillsBar = function( bars ) {
      this.bars = document.querySelectorAll( bars );
      if( this.bars.length > 0 ) {
        this.init();
      } 
    };
    
    SkillsBar.prototype = {
      init: function() {
        var self = this;
        self.index = -1;
        self.timer = setTimeout(function() {
          self.action();
        }, 500);
        
        
      },
      select: function( n ) {
        var self = this,
          bar = self.bars[n];
          
          if( bar ) {
            var width = bar.parentNode.dataset.percent;
          
            bar.style.width = width;
            bar.parentNode.classList.add( "complete" ); 
          }
      },
      action: function() {
        var self = this;
        self.index++;
        if( self.index == self.bars.length ) {
          clearTimeout( self.timer );
        } else {
          self.select( self.index );  
        }
        
        setTimeout(function() {
          self.action();
        },500);
      }
    };
    
    window.SkillsBar = SkillsBar;
    
  })();
  
  (function() {
    document.addEventListener( "DOMContentLoaded", function() {
      var skills = new SkillsBar( ".skillbar-bar" );
    });
  })();

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true 
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

// 
