$(function () { 
    
    
    $("#bio-container").hide();

    
    // Team Bio Click Event ======================================
    function bioPicker(name) {

        switch (name) {
            case `john-bio`:
                return (`<h5>John Chapman serves as Co-Founder & Chief Executive Officer.</h5>
                <p>His distinguished military background has seen him train and deploy to many theaters with Marine Force Reconnaissance, Navy Special Warfare Group and Army Special Forces.</p> 
                <p>Throughout Mr. Chapman's military career, he accumulated in depth knowledge regarding tactical weapons and passion for developing strategies which translated into technologies to enhance the effectiveness of tactical officer's missions.</p>
                <p>Having lost friends and colleagues in the line of duty, he has an intimate knowledge of the impact inferior products have in kinetic environments and strives to overcome these shortcomings.</p>
                <a class="mx-1" href="https://www.linkedin.com/in/john-chapman-us/">
                <i class="fab fa-linkedin fa-fw fa-2x"></i>
                </a>`);
                break;
            case `marc-bio`:
                return (`<h5>Marc Caldwell serves as co-founder and Chief Technology Officer</h5>
                <p>He has over 30 years of experience in new product development and innovation.</p> 
                <p>He holds a Bachelors of Science in Mechanical Engineering, a Masters of Science in Chemical Engineering and has been awarded 8 US patents for his innovative work.</p>
                <p>Marc has served as the Director of Engineering for Combat Training Solutions, a supplier of military training hardware and IED simulations. </p>
                <p>Marc has owned and operated a product development and manufacturing firm for 25 years.</p>
                <a class="mx-1" href="https://www.linkedin.com/in/marcus-caldwell-3b33427/">
                <i class="fab fa-linkedin fa-fw fa-2x"></i>
                </a>`);
                break;
            case `nathan-bio`:
                return (`<h5>Nathan Waller serves as the sUAS subject matter expert and USAF liaison specialist.</h5>
                <p>He served six years in the USAF as a Special Operations Weather Team member;  serving on two combat deployments as an element leader with multiple training exercises partnering with DOD and coalition forces. </p> 
                <p>He holds his associates degree in meteorology, part 107 commercial sUAS rating with certifications in assault zone operations, air field surveying, communications, TCCC, small unit tactics, direct action and technical systems. 
                </p>
                <p>During his final deployment in 2016 his team was tasked with conducting one of the first commercial sUAS fielding and development operations. </p>
                <p>With teammates still serving today, Nathan has a vested interest in fielding today’s best risk mitigation innovations rapidly.</p>
                <a class="mx-1" href="https://www.linkedin.com/in/nathan-waller/">
                  <i class="fab fa-linkedin fa-fw fa-2x"></i>
                </a>`);
                break;
        }
    };

    

    $(".carousel-team-item").on("click", function () {
        event.preventDefault();
        var name = $(this).find(`button`).attr(`id`);
        var slideDuration = 1000;
        var fadeDuration = 2000;
        

        if ($(this).find(`i`).hasClass(`fa-minus-square`)) {
            $(".bio-container").stop(true, true).fadeOut({ duration: fadeDuration, queue: false }).slideUp(slideDuration).removeClass(`open`);
            $(this).find(`i`).removeClass(`fa-minus-square`).addClass(`fa-plus-square`);
            
        } else if ($(this).find(`i`).hasClass(`fa-plus-square`) && ($(".bio-container").hasClass(`open`))) { 
            $(this).siblings().find(`i`).removeClass(`fa-minus-square`).addClass(`fa-plus-square`)
            $(this).find(`i`).removeClass(`fa-plus-square`).addClass(`fa-minus-square`);
            $(".bio-container").empty().append(bioPicker(name)).css(`display`, `none`);
            $(".bio-container").stop(true, true).fadeIn({duration: fadeDuration, queue: false})
        }else {
            
            $(this).siblings().find(`i`).removeClass(`fa-minus-square`).addClass(`fa-plus-square`)
            $(this).find(`i`).removeClass(`fa-plus-square`).addClass(`fa-minus-square`);
            $(".bio-container").empty().addClass(`open`).append(bioPicker(name));
            $(".bio-container").stop(true, true).fadeIn({duration: fadeDuration, queue: false}).css(`display`, `none`).slideDown(slideDuration);
            
        }
    })

    



});