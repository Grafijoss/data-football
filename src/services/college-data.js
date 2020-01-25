import trae from 'trae';
import configService from './config';

const collegeDataService = trae.create({
	baseUrl: configService.collegeFootballData
});

export default collegeDataService;
