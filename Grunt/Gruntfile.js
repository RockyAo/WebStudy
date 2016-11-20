/**
 * Created by RockyAo on 2016/11/20.
 */
module.export = function (grunt) {

    //自定义任务配置
    grunt.initConfig({
        jshint:{
            src:'src/test.js'
        },
        uglify:{

            build:{
                src:'src/test.js',
                dest:'build/test.min.js'
            }
        }
    });

    //将两个任务插件导入
    grunt.loadnpmTask('grunt-contrib-uglify');
    grunt.loadnpmTask('grunt-contrib-jsinit');
    //注册自定义任务
    grunt.rigisterTask('default',['jsinit','uglify']);
}
