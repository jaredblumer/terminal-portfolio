$(function() {
    $('#terminal').terminal({
      aboutme: function () {
         this.echo('[[b;;]ABOUT ME]'
         + "\n       I am a versatile Software Engineer and Data Analyst experienced in data "
         + "\n       analytics, database management, graphic design, and full-stack web development, "
         + "\n       specializing in Javascript, TypeScript, Node.js, React, and Python. I am the "
         + "\n       Lead Organizer of Pittsburgh's node.pgh Meetup and a Volunteer Technical "
         + "\n       Contributor for the Wikimedia Foundation."
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
         + '\n       aboutme'
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
         + '\n       GitHub: https://github.com/jaredblumer'
         + '\n       GitLab: https://gitlab.com/jaredblumer'
         + '\n       LinkedIn: https://www.linkedin.com/in/jaredblumer'
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