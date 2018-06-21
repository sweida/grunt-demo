module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      src: 'build/'
    },
    useminPrepare: {
      html: 'build/index.html',
      options: {
        dest: 'build'
      }
    },
    usemin: {
      html: 'build/index.html',
      options: {
        dest: 'build'
      }
    },
    copy: {
      html: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*',
          dest: 'build/'
        }]
      }
    },
    // babel: {
    //   options: {
    //     sourceMap: true,
    //     presets: ['env']
    //   },
    //   dist: {
    //     files: [{
    //       expand:true,
    //       cwd: 'dist',     //js目录下
    //       src: '**/<%= pkg.name %>.js',  //所有js文件
    //       dest: 'dist'  //输出到此目录下
    //     }]
    //   }
    // },
    cssmin: {
      buildrelease: {
        options: {
          report: "min" //输出压缩率
        }
      }
    },
    uglify: {
      buildrelease: {
        options: {
          report: "min" //输出压缩率
        }
      }
    }
  });
  // 告诉grunt 我们将要使用的插件
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  // grunt.loadNpmTasks('grunt-babel');

  // 告诉grunt 我们在终端输入grunt时需要做些什么（注意先后顺序）
  grunt.registerTask('default', [
    'clean',
    'copy',
    'useminPrepare',
    'concat',
    'cssmin',
    // 'babel',
    'uglify',
    'usemin'
  ]);
};
