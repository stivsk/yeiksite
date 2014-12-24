$(document).ready(function(){

    var cursos = [
        {
            'name':'JavaScript',
        },
        {
           'name':'html5',
        },
        {
            'name':'Ruby on rails'
        }
    ];

    displayCourses(cursos);

    function displayCourses(arr){
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++){
            out += '<div class="linkToCourse top-10">' +
            '<a class="btn btn-green" href="' + arr[i].name.replace(/\s/g,'_') + '.html' + '">' + arr[i].name + '</a></div>';
        }
        document.getElementById('courses').innerHTML = out;
    }

   



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
});


        
    
