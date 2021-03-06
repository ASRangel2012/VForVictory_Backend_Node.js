const sql = require('../../model/entity');
const nodemailer = require('nodemailer');
require('dotenv').config();
const fs = require('fs');
const path = require('path')
const stream = require('stream')

exports.getNotFound = function (req, res, next) {
    res.status(404).send();
};

exports.getHelloWorld = function (req, res, next) {
    res.status(200).send("Hello World");
};

exports.getAllVolunteers = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getAllVolunteers();
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};


exports.getAllFamily = async function (req, res,next){
    let familyList = [];
    familyList = await sql.getAllFamily();
    if(familyList.length > 0){
        res.status(200).json({status:200, results: familyList, resultsLength: familyList.length});
    }else{
        res.status(204).json();
    }
}

exports.getVolunteerByUserNameAndPassword = async function (req, res,next){
    let volunteerList = [];
    volunteerList = await sql.getVolunteerByUserNameAndPassword(req.params.userName, req.params.password);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getCurrentUser = async function (req, res,next){
    let volunteerList = [];
    console.log(req.params.username);
    volunteerList = await sql.getCurrentUser(req.params.username);
    console.log(volunteerList);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};



exports.createNewVolunteer = async function (req, res, next) {
    let rowCount = sql.createNewVolunteer(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({userCreated: true});
    } else {
        res.status(202).send();
    }
};

exports.getAllVolunteersByStatus = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getAllVolunteersByStatus(req.params.status);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getVolunteerByUsername = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getVolunteerByUsername(req.params.status);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getAllVolunteersBySearchValue = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getAllVolunteersBySearchValue(req.params.searchValue);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getCurrentUser = async function (req, res,next){
    let volunteerList = [];
    console.log(req.params.username);
    volunteerList = await sql.getCurrentUser(req.params.username);
    console.log(volunteerList);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};



exports.createNewVolunteer = async function (req, res, next) {
    let rowCount = sql.createNewVolunteer(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({userCreated: true});
    } else {
        res.status(202).send();
    }
};

exports.createNewFamily = async function (req, res, next) {
    let rowCount = sql.createNewFamily(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({familyCreated: true});
    } else {
        res.status(202).send();
    }
};

exports.getAllVolunteersByStatus = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getAllVolunteersByStatus(req.params.status);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getVolunteerByUsername = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getVolunteerByUsername(req.params.status);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getAllVolunteersBySearchValue = async function (req, res, next) {
    let volunteerList = [];
    volunteerList = await sql.getAllVolunteersBySearchValue(req.params.searchValue);
    if (volunteerList.length > 0) {
        res.status(200).json({status: 200, results: volunteerList, resultsLength: volunteerList.length});
    } else {
        res.status(204).send();
    }
};

exports.getAllBusinesses = async function (req, res, next) {
    let businessesArray = [];
    businessesArray = await sql.getAllBusinesses();
    if (businessesArray.length > 0) {
        res.status(200).json({status: 200, results: businessesArray, resultsLength: businessesArray.length});
    } else {
        res.status(204).send();
    }
};

exports.getBusinessById = async function (req, res,next){
  let businessList = [];
  businessList = await sql.getBusinessById(req.params.businessId);
  if(businessList.length > 0){
      res.status(200).json({status:200, results: businessList, resultsLength: businessList.length});
  }else{
      res.status(204).send();
  }
}

exports.getAllCategories = async function (req, res, next) {
  let categoryList = [];
  categoryList = await sql.getAllCategories();
  if (categoryList.length > 0) {
      console.log(categoryList)
      res.status(200).json({status: 200, results: categoryList, resultsLength: categoryList.length});
  } else {
      res.status(204).send();
  }
};

exports.createNewBusiness = async function (req, res, next) {
    let rowCount = sql.createNewBusiness(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({businessCreated: true});
    } else {
        res.status(202).send();
    }
};


exports.updateBusiness = async function (req, res,next){
  let rowCount = sql.updateBusiness(req.body);
  if(rowCount == 1){
    res.status(201).json({businessUpdated: true});
  }else{
    res.status(202).send();
  }
}

exports.getActiveBusinesses = async function (req, res,next){
  let businessList = [];
  businessList = await sql.getActiveBusinesses();
  if(businessList.length > 0){
      res.status(200).json({status:200, results: businessList, resultsLength: businessList.length});
  }else{
      res.status(204).send();
  }
}


exports.getAllBudgets = async function (req, res, next) {
    let budgetArray = [];
    budgetArray = await sql.getAllBudgets();
    if (budgetArray.length > 0) {
        res.status(200).json({status: 200, results: budgetArray, resultsLength: budgetArray.length});
    } else {
        res.status(204).send();
    }
};

exports.createNewBudget = async function(req,res,next){
    let rowCount = sql.createNewBudget(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({budgetCreated: true});
    } else {
        res.status(202).send();
    }
};

exports.getAllBudgets = async function (req, res, next) {
    let budgetArray = [];
    budgetArray = await sql.getAllBudgets();
    if (budgetArray.length > 0) {
        res.status(200).json({status: 200, results: budgetArray, resultsLength: budgetArray.length});
    } else {
        res.status(204).send();
    }
};

exports.createNewBudget = async function(req,res,next){
    let rowCount = sql.createNewBudget(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({budgetCreated: true});
    } else {
        res.status(202).send();
    }
};

exports.createNewVolunteer = async function (req, res,next){
  let rowCount = sql.createNewVolunteer(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({userCreated: true});
  }else{
    res.status(202).send();
  }
}

exports.getAllVolunteersByStatus = async function (req, res,next){
  let volunteerList = [];
  volunteerList = await sql.getAllVolunteersByStatus(req.params.status);
  if(volunteerList.length > 0){
      res.status(200).json({status:200, results: volunteerList, resultsLength: volunteerList.length});
  }else{
      res.status(204).send();
  }
}

exports.getAllVolunteersBySearchValue = async function (req, res,next){
  let volunteerList = [];
  volunteerList = await sql.getAllVolunteersBySearchValue(req.params.searchValue);
  if(volunteerList.length > 0){
      res.status(200).json({status:200, results: volunteerList, resultsLength: volunteerList.length});
  }else{
      res.status(204).send();
  }
}

exports.getVolunteerById = async function (req, res,next){
    let volunteerList = [];
    volunteerList = await sql.getVolunteerById(req.params.volunteerId);
    if(volunteerList.length > 0){
        res.status(200).json({status:200, results: volunteerList, resultsLength: volunteerList.length});
    }else{
        res.status(204).send();
    }
}

exports.updateVolunteer = async function (req, res,next){
    let rowCount = sql.updateVolunteer(req.body);
    if(rowCount == 1){
      res.status(201).json({userUpdated: true});
    }else{
      res.status(202).send();
    }
}

exports.updateProfilePicture = async function (req, res,next){
    //let rowCount = sql.updateVolunteer(req.body);
    //console.log(req.file);
    var fileExtension = path.extname('uploads/'+req.file.originalname);
    var newFileName = 'uploads/'+req.params.username + fileExtension;
    fs.rename('uploads/'+req.file.originalname, newFileName, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });

    sql.tp.sql(`exec [usp_updateProfilePictureURLByUsername] ${req.params.username}, '${newFileName}'`)
        .returnRowCount()
        .execute()
        .then(function(rowCount) {
            if(rowCount > 0){
                res.status(201).json({userUpdated: true});
            }
        }).fail(function(err) {
            console.log(err);
            res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
        });
}

exports.getProfilePicture = async function (req, res,next){
    sql.tp.sql(`exec [usp_getProfilePictureURL] '${req.params.username}'`)
    .execute()
    .then(function(results) {
        if(results){
            const r = fs.createReadStream(results[0].URL)
            const ps = new stream.PassThrough()
            stream.pipeline(
            r,
            ps,
            (err) => {
                if (err) {
                console.log(err)
                    return res.status(400).json({status: 409, errorMessage: `Error getting image: ${err}`});
                }
            })
            ps.pipe(res)
            //res.status(201).json({status: 201, successMessage: `Profile URL is ${results[0].URL}`});
        }
       }).fail(function(err) {
           console.log(err);
           res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
       });
}

exports.saveLoginHistory = async function (req, res,next){
    sql.tp.sql(`exec [usp_insertLoginHistory] ${req.body.userId}, '${req.body.date}' , '${req.body.time}', '${req.body.clientIp}'`)
        .returnRowCount()
        .execute()
        .then(function(rowCount) {
            if(rowCount > 0){
                res.status(201).json({sessionSaved: true});
            }
        }).fail(function(err) {
            console.log(err);
            res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
        });
}

exports.getLoginHistory = async function (req, res,next){
    sql.tp.sql(`exec [dbo].[usp_getLoginHistory] ${req.params.userId}`)
        .execute()
        .then(function(results) {
            if(results.length > 0){
                res.status(200).json({ status: 200, results: results, resultsLength: results.length});
            }
        }).fail(function(err) {
            console.log(err);
            res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
        });
}

exports.changeVolunteerPassword = async function (req, res,next){
    let rowCount = await sql.changeVolunteerPassword(req.params.passwordHash, req.params.volunteerId);
    if(rowCount == 1){
        res.status(201).json({userUpdated: true});
    }else{
        res.status(204).send();
    }
}

exports.getVolunteerByEmail = async function (req, res,next){
    let volunteerList = [];
    volunteerList = await sql.getVolunteerByEmail(req.params.volunteerEmail);
    if(volunteerList.length > 0){
        res.status(200).json({status:200, results: volunteerList, resultsLength: volunteerList.length});
    }else{
        res.status(204).json();
    }
}

exports.getAllEducations = async function (req, res,next){
    let educationList = [];
    educationList = await sql.getAllEducations();
    if(educationList.length > 0){
        res.status(200).json({status:200, results: educationList, resultsLength: educationList.length});
    }else{
        res.status(204).json();
    }
}

exports.getAllRoles = async function (req, res,next){
    let roleList = [];
    roleList = await sql.getAllRoles();
    if(roleList.length > 0){
        res.status(200).json({status:200, results: roleList, resultsLength: roleList.length});
    }else{
        res.status(204).json();
    }
}

exports.getAllCategories = async function (req, res,next){
  let categoryList = [];
  categoryList = await sql.getAllCategories();
  if(categoryList.length > 0){
      res.status(200).json({status:200, results: categoryList, resultsLength: categoryList.length});
  }else{
      res.status(204).send();
  }
}

exports.getAllRequests = async function (req, res, next) {
  let reqList = [];
  reqList = await sql.getAllRequests();
  if (reqList.length > 0) {
      res.status(200).json({status: 200, results: reqList, resultsLength: reqList.length});
  } else {
      res.status(204).send();
  }
};

exports.getActiveRequests = async function (req, res,next){
  let activeList = [];
  activeList = await sql.getActiveRequests();
  if(activeList.length > 0){
      res.status(200).json({status:200, results: activeList, resultsLength: activeList.length});
  }else{
      res.status(204).send();
  }
}

exports.getRenderedServices = async function (req, res,next){
  let renderedList = [];
  renderedList = await sql.getRenderedServices();
  if(renderedList.length > 0){
      res.status(200).json({status:200, results: renderedList, resultsLength: renderedList.length});
  }else{
      res.status(204).send();
  }
}

exports.getRequestById = async function (req, res,next){
  let requestList = [];
  requestList = await sql.getRequestById(req.params.serviceId);
  if(requestList.length > 0){
      res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
  }else{
      res.status(204).send();
  }
}

exports.createNewRequest = async function (req, res,next){
  let rowCount = sql.createNewRequest(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestCreated: true});
  }else{
    res.status(202).send();
  }
}

exports.fulfillRequest = async function (req, res,next){
  let rowCount = sql.fulfillRequest(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.markBusinessNotified = async function (req, res,next){
  let rowCount = sql.markBusinessNotified(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.markFamilyNotified = async function (req, res,next){
  let rowCount = sql.markFamilyNotified(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.markBusinessFollowedUp = async function (req, res,next){
  let rowCount = sql.markBusinessFollowedUp(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.markFamilyFollowedUp = async function (req, res,next){
  let rowCount = sql.markFamilyFollowedUp(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.deleteRequest = async function (req, res,next){
  let rowCount = sql.deleteRequest(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.getThisMonthFamilies = async function (req, res,next){
    let familyList = [];
    familyList = await sql.getThisMonthFamilies();
    if(familyList.length > 0){
        res.status(200).json({status:200, results: familyList, resultsLength: familyList.length});
    }else{
        res.status(204).send();
    }
}

exports.getFamiliesToApprove = async function (req, res,next){
    let familyList = [];
    familyList = await sql.getFamiliesToApprove();
    if(familyList.length > 0){
        res.status(200).json({status:200, results: familyList, resultsLength: familyList.length});
    }else{
        res.status(204).send();
    }
}

exports.getThisMonthBusinesses = async function (req, res,next){
    let businessList = [];
    businessList = await sql.getThisMonthBusinesses();
    if(businessList.length > 0){
        res.status(200).json({status:200, results: businessList, resultsLength: businessList.length});
    }else{
        res.status(204).send();
    }
}

exports.getBusinessesToApprove = async function (req, res,next){
    let businessList = [];
    businessList = await sql.getBusinessesToApprove();
    if(businessList.length > 0){
        res.status(200).json({status:200, results: businessList, resultsLength: businessList.length});
    }else{
        res.status(204).send();
    }
}

exports.getThisMonthRequests = async function (req, res,next){
    let requestList = [];
    requestList = await sql.getThisMonthRequests();
    if(requestList.length > 0){
        res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
    }else{
        res.status(204).send();
    }
}
exports.markFamilyActive = async function (req, res,next){
    let rowCount = sql.markFamilyActive(req.body);
    console.log(rowCount);
    if(rowCount == 1){
      res.status(201).json({requestFulfilled: true});
    }else{
      res.status(202).send();
    }
  }

  exports.markFamilyInactive = async function (req, res,next){
    let rowCount = sql.markFamilyInactive(req.body);
    console.log(rowCount);
    if(rowCount == 1){
      res.status(201).json({requestFulfilled: true});
    }else{
      res.status(202).send();
    }
  }

  exports.getActiveFamily = async function (req, res,next){
    let activeList = [];
    activeList = await sql.getActiveFamily();
    if(activeList.length > 0){
        res.status(200).json({status:200, results: activeList, resultsLength: activeList.length});
    }else{
        res.status(204).send();
    }
  }

  exports.getInactiveFamily = async function (req, res,next){
  let renderedList = [];
  renderedList = await sql.getInactiveFamily();
  if(renderedList.length > 0){
      res.status(200).json({status:200, results: renderedList, resultsLength: renderedList.length});
  }else{
      res.status(204).send();
  }
}

exports.getFamilyByEmail = async function (req, res,next){
  let familyList = [];
  familyList = await sql.getFamilyByEmail(req.params.familyEmail);
  if(familyList.length > 0){
      res.status(200).json({status:200, results: familyList, resultsLength: familyList.length});
  }else{
      res.status(204).send();
  }
}

exports.getFamilyById = async function (req, res,next){
  let familyList = [];
  familyList = await sql.getFamilyById(req.params.familyId);
  if(familyList.length > 0){
      res.status(200).json({status:200, results: familyList, resultsLength: familyList.length});
  }else{
      res.status(204).send();
  }
}

exports.createNewCategory = async function (req, res, next) {
    let rowCount = sql.createNewCategory(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({categoryCreated: true});
    } else {
        res.status(202).send();
    }
};

exports.getCategoryById = async function (req, res,next){
    let categoryList = [];
    categoryList = await sql.getCategoryById(req.params.categoryId);
    if(categoryList.length > 0){
        res.status(200).json({status:200, results: categoryList, resultsLength: categoryList.length});
    }else{
        res.status(204).send();
    }
}

exports.updateCategory = async function (req, res, next) {
    let rowCount = sql.updateCategory(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({categoryUpdated: true});
    } else {
        res.status(202).send();
    }
};

exports.updateBusinessLogo = async function (req, res,next){
    //let rowCount = sql.updateVolunteer(req.body);
    //console.log(req.file);
    var fileExtension = path.extname('uploads/'+req.file.originalname);
    var newFileName = 'uploads/'+req.params.businessName + fileExtension;
    fs.rename('uploads/'+req.file.originalname, newFileName, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });

    sql.tp.sql(`exec [usp_updateProfilePictureURLByBusinessName] '${req.params.businessName}', '${newFileName}'`)
        .returnRowCount()
        .execute()
        .then(function(rowCount) {
            if(rowCount > 0){
                res.status(201).json({businessUpdated: true});
            }
        }).fail(function(err) {
            console.log(err);
            res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
    });
}

exports.getBusinessLogo = async function (req, res,next){
    sql.tp.sql(`exec [usp_getBusinessLogoURL] '${req.params.businessName}'`)
    .execute()
    .then(function(results) {
        if(results){
            const r = fs.createReadStream(results[0].URL)
            const ps = new stream.PassThrough()
            stream.pipeline(
            r,
            ps,
            (err) => {
                if (err) {
                console.log(err)
                    return res.status(400).json({status: 409, errorMessage: `Error getting image: ${err}`});
                }
            })
            ps.pipe(res)
            //res.status(201).json({status: 201, successMessage: `Profile URL is ${results[0].URL}`});
        }
       }).fail(function(err) {
           console.log(err);
           res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
       });
}

exports.getServicesRendered = async function (req, res,next){
    let servicesRenderedList = [];
    servicesRenderedList = await sql.getServicesRendered(req.params.businessId);
    if(servicesRenderedList.length > 0){
        res.status(200).json({status:200, results: servicesRenderedList, resultsLength: servicesRenderedList.length});
    }else{
        res.status(204).send();
    }
}

exports.approveBusiness = async function (req, res,next){
    sql.tp.sql(`exec [usp_approveBusiness] ${req.params.businessId}, '${req.params.approvedBy}'`)
    .execute()
    .then(function(result) {
        console.log(result)
        if(result){
            res.status(200).json({businessApproved: true});
        }
    }).fail(function(err) {
        console.log(err);
        res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
    });
}

exports.disableBusiness = async function (req, res,next){
    sql.tp.sql(`exec [usp_disableBusiness] ${req.params.businessId}, '${req.params.disabledBy}'`)
    .execute()
    .then(function(result) {
        console.log(result)
        if(result){
            res.status(200).json({businessDisabled: true});
        }
    }).fail(function(err) {
        console.log(err);
        res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
    });
}


exports.modifyBudget = async function (req, res, next) {
    let rowCount = sql.modifyBudget(req.body);
    if(rowCount == 1){
        res.status(201).json({message: 'Updated budget!' , budgetUpdated: true})
    }else{
        res.status(202).send({message: 'Unable to modify budget'});
    }
}

exports.getBudgetByID = async function(req,res,next) {
    let budgetList = [];
    budgetList = await sql.getBudgetByID(req.params.id);
    if(budgetList.length > 0){
        res.status(200).send({status:200, results: budgetList, resultsLength: budgetList.length})
    }else{
        res.status(204).send({message: 'Unable to get Budget'});
    }
}

exports.createNewExpense = async function(req,res,next){
    let rowCount = sql.createNewExpense(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({expenseCreated: true, results:req.body});
    } else {
        res.status(202).send();
    }
}

exports.getAllExpenses = async function(req,res,next){
    let renderedList = await sql.getAllExpenses();
    if(renderedList.length > 0){
        res.status(200).json({status:200, results: renderedList, resultsLength: renderedList.length});
    }else{
        res.status(204).send();
    }
}

exports.modifyExpense = async function(req,res,next){
    let rowCount = sql.modifyExpense(req.body);
    if(rowCount == 1){
        res.status(201).json({message: 'Updated Expense' , budgetUpdated: true , results:req.body})
    }else{
        res.status(202).send({message: 'Unable to modify Expense'});
    }
}

exports.getExpenseByID = async function(req,res,next){
    let renderedList = [];
    renderedList = await sql.getExpenseByID(req.params.id);
    if(renderedList.length > 0){
        res.status(200).send({status:200, results: renderedList, resultsLength: renderedList.length})
    }else{
        res.status(204).send();
    }
}

exports.createNewVPizzaCard = async function(req,res,next){
    let rowCount = sql.createNewVPizzaCard(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({giftCardCreated: true, results:req.body});
    } else {
        res.status(202).send();
    }
}

exports.getAllVGiftCards = async function(req,res,next){
    let renderedList = await sql.getAllVGiftCards();
    if(renderedList.length > 0){
        res.status(200).json({status:200, results: renderedList, resultsLength: renderedList.length});
    }else{
        res.status(204).send();
    }
}

exports.modifyVPizzaGC = async function(req,res,next){
    let rowCount = sql.modifyVPizzaCard(req.body)
    if(rowCount == 1){
        res.status(201).json({message: 'Updated GiftCard' , giftCardUpdated: true , results:req.body})
    }else{
        res.status(202).send({message: 'Unable to modify GiftCard'});
    }
}

exports.getThisMonthExpenses = async function(req,res,next){
    let requestList = [];
    requestList = await sql.getThisMonthExpenses();
    if(requestList.length > 0){
        res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
    }else{
        res.status(204).send();
    }
}

exports.getBudgetByFamilyID = async function(req,res,next){
    let renderedList = [];
    renderedList = await sql.getBudgetByFamilyID(req.params.familyId);
    if(renderedList.length > 0){
        res.status(200).send({status:200, results: renderedList, resultsLength: renderedList.length})
    }else{
        res.status(204).send();
    }
}

exports.getFamilyByID = async function(req,res,next){
    let renderedList = [];
    renderedList = await sql.getFamilyByID(req.params.id);
    if(renderedList.length > 0){
        res.status(200).send({status:200, results: renderedList, resultsLength: renderedList.length})
    }else{
        res.status(204).send();
    }
}

exports.modifyFamilyByID = async function (req, res, next) {
    let rowCount = sql.modifyFamilyByID(req.body);
    if(rowCount == 1){
        res.status(201).json({message: 'Updated Family' , familyUpdated: true})
    }else{
        res.status(202).send();
    }
}

exports.getThisMonthFamiliesApproved = async function(req,res,next){
    let requestList = [];
    requestList = await sql.getThisMonthFamiliesApproved();
    if(requestList.length > 0){
        res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
    }else{
        res.status(204).send();
    }
}

exports.getThisMonthFamiliesCreated = async function(req,res,next){
    let requestList = [];
    requestList = await sql.getThisMonthFamiliesCreated();
    if(requestList.length > 0){
        res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
    }else{
        res.status(204).send();
    }
}

exports.addVPizzaGiftCard = async function(req,res,next){
    let renderedList = [];
    renderedList = await sql.addVPizzaGiftCard(req.body);
    if(renderedList.length > 0){
        res.status(200).send({status:200, results: renderedList, resultsLength: renderedList.length})
    }else{
      res.status(204).send();
  }
}

exports.setValueCost = async function (req, res,next){
  let rowCount = sql.setValueCost(req.body);
  console.log(rowCount);
  if(rowCount == 1){
    res.status(201).json({requestFulfilled: true});
  }else{
    res.status(202).send();
  }
}

exports.approveFamily = async function (req, res,next){
    sql.tp.sql(`exec [usp_approveFamily] ${req.params.familyId}, '${req.params.approvedBy}'`)
    .execute()
    .then(function(result) {
        console.log(result)
        if(result){
            res.status(200).json({familyApproved: true});
        }
    }).fail(function(err) {
        console.log(err);
        res.status(409).json({status: 409, errorMessage: `Error saving to database: ${err}`});
    });
}

exports.getApprovedFamily = async function (req, res,next){
    let familyList = [];
    familyList = await sql.getApprovedFamily();
    if(familyList.length > 0){
        res.status(200).json({status:200, results: familyList, resultsLength: familyList.length});
    }else{
        res.status(204).json();
    }
}

exports.getFamilyNotes = async function(req,res,next){
    let noteList = [];
    noteList = await sql.getFamilyNotes(req.params.familyId);
    if(noteList.length > 0){
        res.status(200).send({status:200, results: noteList, resultsLength: noteList.length})
     }else{
    res.status(204).send();
  }
}

exports.addNote = async function (req, res, next) {
    let rowCount = sql.addNote(req.body);
    console.log(rowCount);
    if (rowCount == 1) {
        res.status(201).json({noteAdded: true});
    } else {
        res.status(202).send();
    }
}

exports.editNote = async function (req, res, next) {
    let rowCount = sql.editNote(req.body);
    if(rowCount == 1){
      res.status(201).json({noteUpdated: true});
    } else {
        res.status(202).send();
    }
}

exports.deleteNote = async function (req, res, next) {
    let rowCount = sql.deleteNote(req.body);
    if(rowCount == 1){
      res.status(201).json({noteDeleted: true});
    } else {
        res.status(202).send();
    }
}

exports.getVPizzaGFByFamilyID = async function ( req, res, next){
    let requestList = [];
    requestList = await sql.getVPizzaGFByFamilyID(req.params.id);
    if(requestList.length > 0){
        res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
    }else{
        res.status(204).send();
    }
}

exports.getFullVPizzaGF = async function (req, res, next){
    let requestList = [];
    requestList = await sql.getFullVPizzaGF(req.params.id, req.params.family_id);
    if(requestList.length > 0){
        res.status(200).json({status:200, results: requestList, resultsLength: requestList.length});
    }else{
        res.status(204).send();
    }
}

exports.getVPizzaTransactionHistory = async function (req, res, next) {
  let pizzaList = [];
  pizzaList = await sql.getVPizzaTransactionHistory();
  if (pizzaList.length > 0) {
      res.status(200).json({status: 200, results: pizzaList, resultsLength: pizzaList.length});
  } else {
      res.status(204).send();
  }
};

exports.markPizzaRefilled = async function (req, res, next) {
  let rowCount = sql.markPizzaRefilled(req.body);
  if(rowCount == 1){
    res.status(201).json({refilled: true});
  } else {
      res.status(202).send();
  }
}

exports.getFamilyServicesRendered = async function (req, res,next){
  let servicesRenderedList = [];
  servicesRenderedList = await sql.getFamilyServicesRendered(req.params.familyId);
  if(servicesRenderedList.length > 0){
      res.status(200).json({status:200, results: servicesRenderedList, resultsLength: servicesRenderedList.length});
  }else{
      res.status(204).send();
  }
}
