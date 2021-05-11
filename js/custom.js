import {events} from './events.js'
$(function () { 
    
    
    $("#bio-container").hide();
    console.info(events);
    $.each(events, function(i,v){
        let eventDate = new Date(v.date);
        let today = new Date();
        let b = ``;
        
            b += `<li data-date="${v.date}">`;
                    b += `<div class="card ${today < eventDate ? '' : 'compact'}">`;
                        b += `<div class="card-header">`; 
                            b += `<span>`;
                                b += `<i class="fas fa-calendar-alt" title="date"></i>: <div>${v.date_long}</div>`;
                            b += `</span>`;
                            b += `<span>`;
                                b += `<i class="fas fa-map-marker-alt" title="location"></i>: <div>${v.location}</div>`;
                            b += `</span>`;
                        b += `</div>`;
                        b += `<div class="card-body">`;
                            b += `<div class="label">HOST:</div>`;
                            b += `<div>${v.host}</div>`;
                            if (today < eventDate) {
                                b += `<div class="label mx-top-1">DESCRIPTION:</div>`;
                                b += `<div>${v.description ? v.description : 'Liberty Dynamic Instructor Course'}</div>`;
                                b += `<div class="label mx-top-1">CONTACT:</div>`;
                                b += `<div><a href="${v.register_link ? v.register_link : 'mailto:training@libertydynamic.com'}" target="_blank">${v.register_text ? v.register_text : 'training@libertydynamic.com'}</a></div>`;
                            }
                        b += `</div>`;
                    b += `</div>`;
                b += `</li>`;
                console.info(b)
        
                if (today < eventDate) {
                    $('#upcoming_events').append(b);
                } else {
                    $('#past_events').append(b);
                }                  
    });
    
    //Move past events
    // setTimeout(function(){
    //     $.each($('#upcoming_events li'), function(i,v){
    //         let eventDate = new Date($(v).attr('data-date'));
            
    //         let today = new Date();
    //         // console.info(today)
    //         // console.info(eventDate < today)
    //         if (eventDate < today) {
    //             $(v).appendTo('#past_events')
    //             $(v).find('.noshow').remove();
    //             $(v).find('.card').addClass('compact');
    //         }
    //     });
    // },500)
    

    
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
            case 'jarrett-bio':
                return (`<h5>Jarrett Hill serves as a key Tactics and Training Subject Matter Expert</h5>
                <p>With over twenty-years of tactical experience, Jarrett has served in the Marine infantry, as a respected federal agent, and in the private military sector.</p>
                <p>An experienced and knowledgeable operator, Jarrett has advanced through numerous tactical entry schools. His eight years of rigorous service on tactical entry teams has provided him with the aptitude to provide cutting edge techniques and situational experience for Liberty’s product development.</p>
                `)
                break;
            case 'adam-bio':
                return (`<h5>Adam Chapman serves as Marketing & Communications Advisor</h5>
                <p>Adam has over fifteen years of experience in sales, marketing and digital design.</p>
                <p>He helps strategize and execute Liberty Dynamic's digital and social media missions around the world.</p>
                <p>Adam appreciates the great risk and sacrifice his brother and friends experienced in their operations and how the Liberty Dynamic flash-bang will greatly improve safety and tactical advantage.</p>
                <p>Liberty Dynamic is disrupting an entrenched market in a relatively short period of time and he is proud of the intense interest and demand for the device from military, SWAT, DEA and other law enforcement teams around the world. </p>
                <a class="mx-1" href="https://www.linkedin.com/in/adamachapman/">
                <i class="fab fa-linkedin fa-fw fa-2x"></i>
                </a>`);
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
        horizontalOrder: true
      });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    $(document).on('click','.btn_show_past_events', function(e){
  
        //Hide Past Events
        if ($(this).hasClass('active')){
            $(this).find('span').html('Show Past Events')
            $(this).removeClass('active')
            $('#past_events').hide();
            $(this).find('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down')
        } 
        // Show Past Events
        else {
            $(this).find('span').html('Hide Past Events');
            $(this).addClass('active');
            $('#past_events').show();
            $(this).find('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up')
        }
    });


});