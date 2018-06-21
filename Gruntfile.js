module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          scripts: {
            files: ['src/js/*.js', 'src/css/*.css'],
            tasks: ['uglify'],
            options: {spawn: false}
          }
        },
        concat: {
            allOne: {
                src: ['src/js/*.js'],
                dest: 'dest/js/<%= pkg.name %>.js'
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
                    cwd:'dest/', //js目录下
                    src:['**/*.js'], //所有js文件
                    dest:'dest/'  //输出到此目录下
                }]
            }
        },
        uglify: {
            buildrelease: {
                options: {
                    report: "min" //输出压缩率
                },
                files: [{
                    expand: true,
                    cwd: 'dest/js', //js目录
                    src: '**/*.js', //所有js文件
                    dest: 'dest/js', //输出到此目录下
                    ext: '.min.js' //指定扩展名
                }]
            }
        }
    });
    // 告诉grunt 我们将要使用的插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 告诉grunt 我们在终端输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default', ['concat', 'babel', 'uglify:buildrelease', 'watch']);
};
