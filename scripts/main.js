$(document).ready(function(){

    var disqus_shortname = 'yeiksite2'; 
     
   (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();


	$('.comments').html('<div id="disqus_thread"></div> <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>');

	$('.blur').blurjs({
	    source: 'body',
	    radius: 40
	});

////////////////////////////////////////////////////////////////////////////////
var cursos = ['javaScript','html5', 'ruby on rails','java','perl', 'php','ruby','Django','NodeJs'];


    function displayCourses(arr){
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++){
            out += '<div class="linkToCourse top-10">' +
            '<a class="btn btn-green" href="cursos/' + arr[i].replace(/\s/g,'_') + '.html' + '">' + arr[i] +'</a></div>';
        }
        document.getElementById('courses').innerHTML = out;
    }

    displayCourses(cursos);
////////////////////////////////////////////////////////////////////////////////














    
});


        
    
