import ajax from '@/utills/api/ajax';
const prev = '/api';
// 测试
export const loginUser = async (data: {}, method: string) => ajax(`${prev}/user/login`, data, method);

