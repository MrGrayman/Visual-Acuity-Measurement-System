package swe.visualacuity.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import liquibase.integration.spring.SpringLiquibase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import javax.sql.DataSource;
import java.util.TimeZone;

@SpringBootApplication
public class DemoApplication {

	private static Logger logger = LoggerFactory.getLogger(DemoApplication.class);

	public static void main(String[] args) {
		logger.info("starting");
		System.setProperty("liquibase.databaseChangeLogTableName", "DATABASECHANGELOG");
		System.setProperty("liquibase.databaseChangeLogLockTableName", "DATABASECHANGELOGLOCK");
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public ObjectMapper objectMapper(){
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.setTimeZone(TimeZone.getTimeZone("GMT+7"));
		objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
		return objectMapper;
	}

	@Bean
	public SpringLiquibase liquibase(DataSource dataSource){
		SpringLiquibase liquibase = new SpringLiquibase();
		liquibase.setDataSource(dataSource);
		liquibase.setContexts("dev");
		liquibase.setChangeLog("classpath:db-changelog.xml");
		return liquibase;
	}

}
