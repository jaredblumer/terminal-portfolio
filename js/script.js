$(function() {
    $('#terminal').terminal({
      aboutme: function () {
         this.echo('[[b;;]ABOUT ME]'
         + "\n       Hi there, my name's Jared Blumer ( he / him ). I am a Software Engineer and Data Analyst"
         + "\n       experienced in data analytics, database management, graphic design, and full-stack web development."
         + "\n       I specialize in Javascript, TypeScript, Node.js, Express.js, React, and Python and am the Lead"
         + "\n       Organizer of Pittsburgh's node.pgh Meetup and a Volunteer Technical Contributor for the Wikimedia"
         + "\n       Foundation."
         + "\n"
         + "\n       I am a lifelong learner and a proponent of [[!;;;;https://blog.doist.com/deep-work/]Deep Work] and the [[!;;;;https://fs.blog/2015/03/carol-dweck-mindset/]Growth Mindset], and believe (as stated"
         + '\n       by Stanford psychologist Carol Dweck) that ' + '"effort is what makes you smart or talented."'
         + "\n"
         + "\n       Enter 'projects' to see what I'm working on to further develop my skills and knowledge."
         );
      },
      contact: function () {
         this.echo('[[b;;]CONTACT]'
         + '\n       Email: jaredblumer@protonmail.com'
         + '\n       LinkedIn: https://www.linkedin.com/in/jaredblumer'
         );
      },
      design: function () {
         this.echo('[[b;;]DESIGN]'
         + '\n       WAHBI HUSSAIN'
         + '\n       Contracted by Data Engineer Wahbi Hussain to design and build his portfolio site.'
         + '\n       Utilized HTML5, CSS3, and JQuery. '
         + '\n       View: https://wahbihussain.me/'
         + '\n'
         + '\n       ATZENI DESIGN STUDY'
         + "\n       Inspired by Alessio Atzeni's portfolio site, I reverse engineered his website design"
         + '\n       to improve my craft. Utilized HTML5, CSS3, JavaScript, and JQuery.'
         + '\n       View: https://jaredblumer.github.io/atzeni-study/'
         + '\n       Code: https://github.com/jaredblumer/atzeni-study'
         );
      },
      help: function () {
          this.echo('[[b;;]COMMANDS]'
          + '\n       aboutme'
          + '\n       contact'
          + '\n       design'
          + '\n       links'
          + '\n       opensource'
          + '\n       projects'
          + '\n       skills'
          );
      },
      links: function () {
         this.echo('[[b;;]LINKS]'
         + '\n       LinkedIn: https://www.linkedin.com/in/jaredblumer'
         + '\n       GitHub: https://github.com/jaredblumer'
         + '\n       GitLab: https://gitlab.com/jaredblumer'
         );
      },
      opensource: function () {
         this.echo('[[b;;]OPEN SOURCE]'
         + '\n       aboutme'
         );
      },
      projects: function () {
         this.echo('[[b;;]PROJECTS]'
         + '\n       aboutme'
         );
      },
      skills: function () {
         this.echo('[[b;;]SKILLS]'
         + '\n       aboutme'
         );
      },
  }, {
       greetings: greeting.innerHTML
    });
 });