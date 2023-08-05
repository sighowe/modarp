<?php
class Users {

	//Store connection to database
	public $db;

	//Constructor
	function __construct($dbLocation){
		//TODO: BUILD DATABASE IF NON-EXISTANT
		$this->db = new SQLite3 ($dbLocation);
	}

	//Check if a user exists in the database
	function checkUser($username){
		$user = $this->db->querySingle("SELECT * FROM users WHERE username = '" . $username . "'");
		if($user == null){
			return false;
		}
		return true;
	}
	
	//Verify the availibility of a username
	function verifyAvailible($username){
		if($this->checkUser($username)){
			return false;
		}
		return true;
	}
	
	//Add a user to the database
	function addUser($username, $plainTextPassword){
		$password = hash("ripemd160", $plainTextPassword);
		$this->db->exec("INSERT INTO users (username, password) VALUES('".$username."','".$password. "')");
	}
	
	//Verify a login in the databse
	function verifyLogin($username, $plainTextPassword){
		//Hash plaintext password
		$potentialPassword = hash("ripemd160", $plainTextPassword);
		//Get password hash from database		
		$password = $this->db->query("SELECT password FROM users WHERE username = '" . $username . "'")->fetchArray()[0];
		//Check they are equal
		if($password == $potentialPassword){
			//Return userID of the username
			return $this->getUserID($username);
		}
		return -1;
	}

	//Get the userid of a user in the database
	function getUserID($username){
		$results = $this->db->query("SELECT user_id FROM users WHERE username = '" . $username . "'");
		return($results->fetchArray()[0]);
	}
}
?>
