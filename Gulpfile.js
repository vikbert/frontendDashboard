var gulp = require('gulp');

var path = {
    "shopTarget": {
        "js": "/Users/vikbert/workspace/momox/vagrant-ubup/shop/web/js/*",
        "css": "/Users/vikbert/workspace/momox/vagrant-ubup/shop/web/css/*"
    },
    "autosave": {
        "startSeite": "/Library/WebServer/Documents/autosave/start_files"
    }
};

gulp.task('js', function() {
    // DO NOT change the order of paths because of dependenciesw
    return gulp.src([
            path.shopTarget.js
        ])
        .pipe(gulp.dest(path.autosave.startSeite));
});

gulp.task('css', function() {
    // DO NOT change the order of paths because of dependenciesw
    return gulp.src([
            path.shopTarget.css
        ])
        .pipe(gulp.dest(path.autosave.startSeite));
});

gulp.task('default', ['js']);
