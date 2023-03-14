package com.edubridge.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.model.Product;
import com.edubridge.repository.ProductRepository;
@Service
public class ProductServiceImp1  implements ProductService{
    @Autowired
    public ProductRepository ProductRepository;
	@Override
	public void addProduct(Product product) {
		ProductRepository.save(product);
		
	}

	@Override
	public Product getProduct(Integer id) {
		// TODO Auto-generated method stub
		Optional<Product> OptionalProduct =ProductRepository.findById(id); 
		return OptionalProduct.get();
	}

	@Override
	public Product getProductByName(String name) {
		// TODO Auto-generated method stub
		Optional<Product> OptionalProduct =ProductRepository.findByTitle(name); 
		return null;
	}

	@Override
	public void UpdateProductPrice(Integer Id, double newPrice) {
		// TODO Auto-generated method stub
		Product product =getProduct(Id);
		product.setPrice(newPrice);
		ProductRepository.save(product);
		
		
	}

	@Override
	public void deleteProduct(Integer Id) {
		// TODO Auto-generated method stub
		ProductRepository.deleteById(Id);
		
	}
	
	@Override
	public List<Product> findAllProducts(){
		
    List<Product> productList= ProductRepository.findAll();
	 return productList;
	}

}

