package com.edubridge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.edubridge.model.User;
import com.edubridge.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	public UserRepository userRepository;

	@Override
	public User saveUser(User user)  {
//		Optional<User> getUser = userRepository.findById(user.getId());
		
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUser()  {
		return userRepository.findAll();
	}

	@Override
	public User updateUser(User user, Integer Id)  {
		Optional<User> getUser = userRepository.findById(Id);

		
		
		return userRepository.save(user);
	}

	@Override
	public void deleteUser(Integer id)  {
		Optional<User> getUser = userRepository.findById(id);
		
		userRepository.deleteById(id);

	}@Override
	public User getUser(String email, String password) {
		// TODO Auto-generated method stub
		User getUserOptional = userRepository.findByEmailAndPassword(email,password);
		return getUserOptional;
	}

	

}
