/**
 * Created by chenyang on 1/28/16.
 */
exports.viewProject = function(req, res) {
    var name = req.params.name;
    console.log("The project name is: " + name);
    res.render('project', {
        'projectName': name
    });
    // controller code goes here 
};