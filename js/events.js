$(function () { 
    let events = [
        //2019 ================================>
        {
            date: '2019-05-20',
            date_long: 'May 20, 2019',
            location: 'Tampa, FL',
            host: 'SOFIC Conference - US Military'
        },
        {
            date: '2019-06-04',
            date_long: 'June 04, 2019',
            location: 'Sandusky, OH',
            host: 'OTOA - Ohio Tactical Officers Association'
        },
        {
            date: '2019-08-17',
            date_long: 'August 17, 2019',
            location: 'Orlando, FL',
            host: 'NTOA - National Tactical Officers Association'
        },
        {
            date: '2019-11-11',
            date_long: 'November 11-15, 2019',
            location: 'Orlando, FL',
            host: 'SWAT Round-Up International'
        },
        //2020 ================================>
        {
            date: '2020-06-22',
            date_long: 'June 22 - 26, 2020',
            location: 'Eldorado, TX',
            host: 'First Spear Movie Shoot',
        },
        {
            date: '2020-11-10',
            date_long: 'November 10, 2020',
            location: 'Little Rock, AR',
            host: 'DARC - Direct Action Resource Center ',
        },
        //2021 ================================>
        {
            date: '2021-03-14',
            date_long: 'March 14-18, 2021',
            location: 'Columbus, GA',
            host: 'GTOA/ATOA Combined - Georgia & Alabama Tactical Officers Association',
        },
        {
            date: '2021-03-30',
            date_long: 'March 30, 2021',
            location: 'Ft. Benning, GA',
            host: '75th Ranger Regiment - TREDS Demo',
            description: 'TREDS Live Demo - Alpha Prototype'
        },
        {
            date: '2021-04-01',
            date_long: 'April 1, 2021',
            location: 'Camp Lejeune, NC',
            host: 'MARSOC - TREDS Demo',
            description: 'TREDS Live Demo - Alpha Prototype'
        },
        {
            date: '2021-04-07',
            date_long: 'April 7, 2021',
            location: 'Dallas, TX',
            host: 'TTPOA - Texas Tactical Police Officers Association',
        },
        {
            date: '2021-04-23',
            date_long: 'April 23, 2021',
            location: 'Alliance OH',
            host: 'Alliance Police Department',
        },
        {
            date: '2021-04-28',
            date_long: 'April 28, 2021',
            location: 'Little Rock, AR',
            host: 'DARC - Direct Action Resource Center'
        },
        {
            date: '2021-04-27',
            date_long: 'April 27-30, 2021',
            location: 'Indianapolis, IN',
            host: "ISOA - INDIANA SWAT OFFICER'S ASSOCIATION CONFERENCE",
            register_link: "https://www.indianaswatofficersassociation.org/2021isoaconference",
            register_text: 'ISOA Website'
        },
        {
            date: '2021-05-17',
            date_long: 'May 17, 2021',
            location: ' Lawrenceville, GA',
            host: "Gwinnett County Police Department",
            
        },
        {
            date: '2021-06-07',
            date_long: 'June 7-10, 2021',
            location: 'Sandusky, OH',
            host: "OTOA - OHIO TACTICAL OFFICER ASSOCIATION CONFERENCE",
            register_link: "https://www.otoa.org/",
            register_text: 'OTOA Website'
        },
        {
            date: '2021-06-09',
            date_long: 'June 9, 2021',
            location: 'Muncie, IN',
            host: "MTAC - Firearms | Tactical | Medical Training",
            register_link: "https://www.mtactraining.com/law-enforcement",
            register_text: 'MTACTraining.com'
        },
        {
            date: '2021-06-30',
            date_long: 'June 30 - July 2, 2021',
            location: 'Durham, NC',
            host: "NCTOA - NORTH CAROLINA TACTICAL OFFICER ASSOCIATION CONFERENCE",
            register_link: "https://www.ncswat.org/events",
            register_text: 'NCTOA Website'
        },
        {
            date: '2021-07-20',
            date_long: 'July 20, 2021',
            location: 'Muncie, IN',
            host: "MTAC - Firearms | Tactical | Medical Training",
            register_link: "https://www.mtactraining.com/law-enforcement",
            register_text: 'MTACTraining.com'
        },
        {
            date: '2021-07-21',
            date_long: 'July 21 - 22, 2021',
            location: 'Nashville, TN',
            host: "TACOPS",
            register_link: "https://www.cvent.com/events/2021-tacops-south-tactical-training-conference-expo/registration-92fdc27c385c4811a1fa9d3ba9ecaeb9.aspx?fqp=true",
            register_text: 'TACOPS Website'
        },
        {
            date: '2021-07-27',
            date_long: 'July 27, 2021',
            location: 'Alliance, OH',
            host: "Alliance Police Training",
        },
        {
            date: '2021-08-09',
            date_long: 'August 9, 2021',
            location: 'Joliet, IL',
            host: "Will County Sheriff Office",
        },
        {
            date: '2021-08-16',
            date_long: 'August 16, 2021',
            location: 'Louisvill, KY',
            host: "KTOA - Kentucky Tactical Officers Association",
            register_link: "http://www.kentuckytacticalofficersassociation.org/2021-conference--trade-show.html",
            register_text: 'KTOA Website'
        },
        {
            date: '2021-08-20',
            date_long: 'August 25, 2021',
            location: 'Verona, NY',
            host: "TACOPS",
            register_link: "https://www.cvent.com/events/2021-nytoa-s-w-a-t-tactical-training-conference-expo/registration-30b0abd418764bdf8cba3a479fb997e3.aspx?fqp=true",
            register_text: 'TACOPS Website'
        },
        {
            date: '2021-09-28',
            date_long: 'September 28, 2021',
            location: 'Brookfield, WI',
            host: "Wisconsin Tactical Association",
            register_link: "https://www.aspwi.org/",
            register_text: 'WI Tactical Assoc Website'
        },
    ]
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
                            b += `<div class="label mx-top-1">REGISTER:</div>`;
                            b += `<div><a href="${v.register_link ? v.register_link : 'mailto:training@libertydynamic.com'}" target="_blank">${v.register_text ? v.register_text : 'training@libertydynamic.com'}</a></div>`;
                        }
                    b += `</div>`;
                b += `</div>`;
            b += `</li>`;
                
        
                if (today < eventDate) {
                    $('#upcoming_events').append(b);
                } else {
                    $('#past_events').append(b);
                }                  
    });

    $(document).on('click','.btn_show_past_events', function(e){
  
        //Hide Past Events
        if ($(this).hasClass('active')){
            $(this).find('span').html('Show Past Events')
            $(this).removeClass('active')
            $('#past_events').hide();
            $(this).find('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
            $(this).closest('.btn-container').removeClass('active');
            $(this).removeClass('active');
        } 
        // Show Past Events
        else {
            $(this).find('span').html('Hide Past Events');
            $(this).addClass('active');
            $('#past_events').show();
            $(this).find('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
            $(this).closest('.btn-container').addClass('active');
            $(this).addClass('active');
        }
    });
})
