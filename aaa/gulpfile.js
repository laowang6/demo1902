const gulp = require("gulp");
gulp.task("copyone",function(){//监听
	return gulp.watch("a/mm.css",["copyAll"])
})

const concat = require("gulp-concat");//合并文件
const cssmin = require("gulp-cssmin");//压缩css文件
const imagemin = require("gulp-imagemin");//压缩图片文件
const rename = require("gulp-rename");//文件重命名
const sass = require("gulp-sass");//将sass文件转为css文件
const uglify = require("gulp-uglify");//压缩js文件


gulp.task("cssmin",function(){//压缩css文件
	return gulp.src("a/mm.css")
			   .pipe(cssmin())
			   .pipe(rename("mm1.min.css"))
			   .pipe(gulp.dest("a"));
})
gulp.task("jsmin",function(){//压缩js文件
	return gulp.src("a/cc.js")
			   .pipe(uglify())
			   .pipe(rename("cc1.min.js"))
			   .pipe(gulp.dest("b"))
})
gulp.task("newsass",function(){//将sass文件转为css文件
	return gulp.src("a/ab.scss")
			   .pipe(sass())
			   .pipe(rename("ab.css"))
			   .pipe(gulp.dest("b"))
})