module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      cssConcat:{
        src:['src/css/*.css'],
        dest:'dist/css/<%= pkg.name %> - <%= grunt.template.today("mm-dd") %>.css' //dest 是目的地输出
      },
      jsConcat:{
        src:'src/js/*.js',
        dest:'dist/js/<%= pkg.name %>.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: [{
          expand:true,
          cwd: 'dist',     //js目录下
          src: '**/<%= pkg.name %>.js',  //所有js文件
          dest: 'dist'  //输出到此目录下
        }]
      }
    },
    cssmin:{
      options:{
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("mm-dd") %> */\n'
      },
      build:{
        src:'dist/css/*.css',//压缩是要压缩合并了的
        dest:'dist/css/<%= pkg.name %> - <%= grunt.template.today("mm-dd") %>.min.css' //dest 是目的地输出
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'  // 在文件头部添加压缩时间
      },
      build: {
        src: 'dist/js/<%= pkg.name %>.js',      //所在js文件
        dest: 'dist/js/<%= pkg.name %>.min.js'  //输出到此目录下
      }
    }
  });
  // 告诉grunt 我们将要使用的插件
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');

  // 告诉grunt 我们在终端输入grunt时需要做些什么（注意先后顺序）
  grunt.registerTask('default', [
    'concat',
    'cssmin',
    'babel',
    'uglify'
  ]);
};
