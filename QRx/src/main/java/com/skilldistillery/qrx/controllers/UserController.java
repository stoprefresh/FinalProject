package com.skilldistillery.qrx.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.User;
import com.skilldistillery.qrx.services.UserService;

// API Routes User - 17AUG19
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIST	    GET	    /api/users/	                    List Users
// READ 	GET	    /api/users/{uid}/	            Show User
// READ     GET     /api/users/patient/{keyword}    Search Patients
// READ     GET     /api/users/provider/{keyword}   Search Providers
// CREATE	POST	/api/users/	                    Add User
// UPDATE	PUT	    /api/users/{uid}/	            Update User
// DELETE	DELETE	/api/users/{uid}/	            Delete User
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@RestController
@CrossOrigin({"*", "http://localhost:4205"})
@RequestMapping("api/users/")
public class UserController {

    @Autowired
    private UserService userSvc;

    @GetMapping()
    public List<User> listAllUsers() {
        return userSvc.findAllUsers();
    }

//    TODO
    // @GetMapping("patient/{keyword}")
    // public List<Patient> searchPatients(
    //     @PathVariable("keyword") String keyword
    //     )
    // {
    //     return userSvc.searchProvidersByKeyword(keyword);
    // }

//    TODO
    // @GetMapping("providers/{keyword}")
    // public List<Provider> searchProviders(
    //     @PathVariable("keyword") String keyword)

    // {
    //     return userSvc.searchPatientsByKeyword(keyword);
    // }

    @GetMapping("{uid}")
    public User showUserById
        (
        @PathVariable("uid") Integer uid
        ) 
    {
        return userSvc.findUserById(uid);
    }

    @PostMapping()
    public User addNewUser
        (
        @RequestBody User newUser,
        HttpServletResponse resp, 
        HttpServletRequest req
        )
    {
        newUser = userSvc.addUser(newUser);
		resp.setStatus(201);
		StringBuffer sb = req.getRequestURL();
		sb.append("/");
		sb.append(newUser.getId());
		resp.setHeader("Location", sb.toString());
		return newUser;
    }
    
    @PutMapping("{uid}")
    public User updateUser
        (
        @RequestBody User updatedUser,
		@PathVariable("uid") Integer uid,
		HttpServletResponse resp
        )
    {
        return userSvc.updateUser(uid, updatedUser);
    }

    @DeleteMapping("{uid}")
    public Boolean deleteUser
        (
        @PathVariable("uid") Integer uid,
        HttpServletResponse resp
        )
    {
        Boolean removed = userSvc.removeUser(uid);
		if(removed == null ) {
			resp.setStatus(404);
		}
		else if(removed) {
			resp.setStatus(204);
		}
		else {
			resp.setStatus(400);
		}
		return removed;
    }
}
