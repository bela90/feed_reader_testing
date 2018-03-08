

$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in application.
    */

    describe('RSS Feeds', function() {
        /* It tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        
        /* Test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('url\'s are defined', function(){

            for (let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('names are defined', function(){

            for (let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    
    describe('The menu', function(){

    
        /* Test ensures the menu element is
         * hidden by default.
         */

        it('is hidden by default', function(){

           expect($('body').hasClass('menu-hidden')).toBe(true);

        });

        /* Test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('is changing visibility when the menu icon is clicked', function(){
       
            $('.menu-icon-link').trigger( "click" );
            expect($('body')).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').trigger( "click" );
            expect($('body')).toHaveClass('menu-hidden');

        });
    });
        
    
    describe('Initial Entries', function(){

        /* Test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
     

        beforeEach(function(done){
           
            setTimeout(function() {
                loadFeed(0);
                done();
            }, 2000);
        });


        it('has at least a single .entry element within the .feed container', function(){

            expect($('.feed')).not.toBeEmpty();
            
        });
    });
    

        
    describe('New Feed Selection', function(){

        /* Test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        var firstContent;

        beforeEach(function(done){
           
            loadFeed(0, function(){
            
                firstContent = $('.feed').html();

                loadFeed(1, function(){

                    done();

                });   
            });
        });

        it('content is changed when loaded', function(){

            var secondContent = $('.feed').html();

            expect(secondContent).not.toBe(firstContent);
        });
    });

}());
