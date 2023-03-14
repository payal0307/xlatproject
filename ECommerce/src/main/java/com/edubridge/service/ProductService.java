package com.edubridge.service;

import java.util.List;

import com.edubridge.model.Product;
public interface ProductService {
	public void addProduct(Product product);
	public Product getProduct(Integer Id);
	public Product getProductByName(String name);
	public void UpdateProductPrice(Integer Id,double newPrice);
	public void deleteProduct(Integer Id);
	List<Product> findAllProducts();

}
