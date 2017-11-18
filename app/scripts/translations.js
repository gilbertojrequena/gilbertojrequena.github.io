'use strict';

angular.module('resumeApp')
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    $translateProvider.translations('en', {
      'title.greetings': 'Hi! I’m',
      'title.go.to.resume': 'Give a look to my resume!',
      'title.download.resume': 'Download my CV',
      'resume.title': 'Resume',
      'resume.about.me.1': 'About',
      'resume.about.me.2': 'Me',
      'skills.abilities.skills.title': 'Skills',
      'skills.abilities.abilities.title': 'Abilities',
      'specialities.title.1': 'My',
      'specialities.title.2': 'Specialities',
      'language.skills.title.1': 'Language',
      'language.skills.title.2': 'skills',
      'education.title': 'Education',
      'jobs.title': 'Jobs',
      'hobbies.title.1': 'Hobbies',
      'hobbies.title.2': 'Interests',
      'testimonials.years.of.experience': 'years of experience',
      'testimonials.over': 'over',
      'testimonials.lines.of.code': 'lines of code',
      'testimonials.what.people.say.about.me': 'Look what my coworkers say about me!',
      'contact.title.1': 'Don’t hesitate to ',
      'contact.title.2': 'contact me',
      'menu.start.title': 'Start',
      'menu.resume.title': 'Resume',
      'menu.testimonials.title': 'Testimonials',
      'menu.contact.title': 'Contact',
      'menu.check.social.media': 'Check my social media!',
      'project.company.link': 'company page',
      'project.project.link': 'project page',
      'project.my.duty.title': 'My duty',
      'project.what.coworkers.say': 'What my coworkers say?'
    })
      .translations('es', {
        'title.greetings': '¡Hola! Soy',
        'title.go.to.resume': '¡Mira mi curriculum!',
        'title.download.resume': 'Descarga mi CV',
        'resume.title': 'Curriculum',
        'resume.about.me.1': 'Acerca de',
        'resume.about.me.2': 'Mí',
        'skills.abilities.skills.title': 'Experiencia',
        'skills.abilities.abilities.title': 'Habilidades',
        'specialities.title.1': 'Mis',
        'specialities.title.2': 'Especialidades',
        'language.skills.title.1': 'Idiomas',
        'language.skills.title.2': 'manejados',
        'education.title': 'Educación',
        'jobs.title': 'Trabajos',
        'hobbies.title.1': 'Hobbies',
        'hobbies.title.2': 'Intereses',
        'testimonials.years.of.experience': 'años de experiencia',
        'testimonials.over': 'más de',
        'testimonials.lines.of.code': 'lineas de código',
        'testimonials.what.people.say.about.me': '¡Mira lo que mis compeñeros de trabajo dicen de mi!',
        'contact.title.1': '¡No dudes en ',
        'contact.title.2': 'contactarme',
        'menu.start.title': 'Inicio',
        'menu.resume.title': 'CV',
        'menu.testimonials.title': 'Testimonios',
        'menu.contact.title': 'Contacto',
        'menu.check.social.media': 'Mira mi social media!',
        'project.company.link': 'company page',
        'project.project.link': 'project page',
        'project.my.duty.title': 'My duty',
        'project.what.coworkers.say': 'What my coworkers say?'
      });

    $translateProvider.preferredLanguage('en');
  }]);
