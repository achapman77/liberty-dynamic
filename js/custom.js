$(function () { 
    
    
    $("#bio-container").hide();

    
    // Team Bio Click Event ======================================
    function bioPicker(name) {

        switch (name) {
            case `john-bio`:
                return (`<h5>John Chapman serves as Co-Founder & Chief Executive Officer</h5>
                <p>During his distinguished military and defense career, John has deployed to seven operational theaters in support of national strategic objectives.</p>
                <p>Throughout 14 years of defense related service, John developed in depth knowledge regarding tactical weapons and an aptitude for developing technologies that enhance the effectiveness of tactical officers' missions. </p>
                <p>Having lost friends and colleagues in the line of duty, John has an intimate knowledge of the impact inferior products can have in kinetic environments. John is intensely focused and driven to overcome the operational deficiencies of tools affecting safety. Providing the highest and best tactical advantage is always in his crosshairs.</p>
                <a class="mx-1" href="https://www.linkedin.com/in/john-chapman-us/">
                <i class="fab fa-linkedin fa-fw fa-2x"></i>
                </a>`);
                break;
            case `marc-bio`:
                return (`<h5>Marc Caldwell serves as Co-Founder and Chief Technology Officer</h5>
                <p>Marc has over 30 years of experience in new product development and innovation.</p> 
                <p>He holds a Bachelors of Science in Mechanical Engineering, a Masters of Science in Chemical Engineering and has been awarded 8 US patents for his innovative work.</p>

                <p>Serving with distinction as the Director of Engineering for Combat Training Solutions; Marc is a trusted supplier of military training hardware and IED simulations. For twenty-five years Marc has owned and operated his own product development and manufacturing firm, developing world class technologies.</p> 
                <a class="mx-1" href="https://www.linkedin.com/in/marcus-caldwell-3b33427/">
                <i class="fab fa-linkedin fa-fw fa-2x"></i>
                </a>`);
                break;
            case 'jarrett-bio':
                return (`<h5>Jarrett Hill serves as a key Tactics and Training Subject Matter Expert</h5>
                <p>With over twenty-years of tactical experience, Jarrett has served in the Marine infantry, as a respected federal agent, and in the private military sector.</p>
                <p>An experienced and knowledgeable operator, Jarrett has advanced through numerous tactical entry schools. His eight years of rigorous service on tactical entry teams has provided him with the aptitude to provide cutting edge techniques and situational experience for Liberty’s product development.</p>
                `)
                break;
            case 'christopher-bio':
                return (`<h5>Christopher Ward serves as a key Tactics and Training Subject Matter Expert</h5>
                <p>Christopher is a skillful operator with five years of experience in the 1/75 Ranger Regiment, USASOC/JSOC as MOS 11V and two years specializing in Reconnaissance Surveillance and Target Acquisition.</p>
                <p>Christopher rounds out his distinguished experience with five official military deployments and one private deployment. His uniquely valuable areas of expertise include combat operations planning, intra-agency cooperation/training and electronics tracking/security.</p>
                `)
                break;
        }
    };

    

    $(".carousel-team-item").on("click", function () {
        event.preventDefault();
        var name = $(this).find(`button`).data(`name`);
        var slideDuration = 1000;
        var fadeDuration = 2000;
        

        if ($(this).find(`i`).hasClass(`fa-minus-square`)) {
            $("#bio-container").stop(true, true).fadeOut({ duration: fadeDuration, queue: false }).slideUp(slideDuration).removeClass(`open`);
            $(this).find(`i`).removeClass(`fa-minus-square`).addClass(`fa-plus-square`);
            
        } else if ($(this).find(`i`).hasClass(`fa-plus-square`) && ($("#bio-container").hasClass(`open`))) { 
            $(this).siblings().find(`i`).removeClass(`fa-minus-square`).addClass(`fa-plus-square`)
            $(this).find(`i`).removeClass(`fa-plus-square`).addClass(`fa-minus-square`);
            $("#bio-container").empty().append(bioPicker(name)).css(`display`, `none`);
            $("#bio-container").stop(true, true).fadeIn({duration: fadeDuration, queue: false})
        }else {
            
            $(this).siblings().find(`i`).removeClass(`fa-minus-square`).addClass(`fa-plus-square`)
            $(this).find(`i`).removeClass(`fa-plus-square`).addClass(`fa-minus-square`);
            $("#bio-container").empty().addClass(`open`).append(bioPicker(name));
            $("#bio-container").stop(true, true).fadeIn({duration: fadeDuration, queue: false}).css(`display`, `none`).slideDown(slideDuration);
            
        }
    })

    var $grid = $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true,
        // stagger: 30,
        // horizontalOrder: true
      });

    // layout Masonry after each image loads
    // $grid.imagesLoaded().progress( function() {
    //     $grid.masonry('layout');
    // });



});