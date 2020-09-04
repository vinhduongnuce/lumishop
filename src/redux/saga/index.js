/* eslint-disable no-empty */

import {call,put,takeLatest} from 'redux-saga/effects';
import { STATUS_CODE } from '../contants';
import { apifetchDevice, apifetchCategory, apifetchDeviceDetail, apifetchDeviceByCategory } from '../../apis';
import * as fetchDevices from '../actions/devices';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from '../actions/categories';
import * as types from './../actions/types';

function* watchHomeDevices() {
  try {
    const resp = yield call(apifetchDevice);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCES || status === STATUS_CODE.MODIFIED) {
      yield put(fetchDevices.fetchHomeDevicesSuccess(data));
    } else {
      yield put(fetchDevices.fetchHomeDevicesFailed(data));
    }
  } catch (error) {
    console.log('lỗi không load được dữ liệu!');
  } finally { }
}

function* watchDetailDevices({payload}) {
  try {
    const resp = yield call(apifetchDeviceDetail, payload);
    console.log('resp', resp);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCES || status === STATUS_CODE.MODIFIED) {
      yield put(fetchDevices.fetchDetailDevicesSuccess(data));
    } else {
      yield put(fetchDevices.fetchDetailDevicesFailed(data));
    }
  } catch (error) {
    console.log(error);
    console.log('lỗi không load được dữ liệu!');
  } finally { }
}

function* watchListDevices() {
  try {
    const resp = yield call(apifetchDevice);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCES || status === STATUS_CODE.MODIFIED) {
      yield put(fetchDevices.fetchListDevicesSuccess(data));
    } else {
      yield put(fetchDevices.fetchListDevicesFailed(data));
    }
  } catch (error) {
    console.log('lỗi không load được dữ liệu!');
  } finally {

  }
}

function* watchListDevicesByCategory({payload}) {
  try {
    const resp = yield call(apifetchDeviceByCategory, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCES || status === STATUS_CODE.MODIFIED) {
      yield put(fetchDevices.fetchDevicesByCategorySuccess(data));
    } else {
      yield put(fetchDevices.fetchDevicesByCategoryFailed(data));
    }
  } catch (error) {
    console.log(error);
    console.log('lỗi không load được dữ liệu!');
  } finally {

  }
}

function* watchListCategories() {
  try {
    const resp = yield call(apifetchCategory);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCES || status === STATUS_CODE.MODIFIED) {
      yield put(fetchCategoriesSuccess(data));
    } else {
      yield put(fetchCategoriesFailed(data));
    }
  } catch (error) {
    console.log(error);
    console.log('lỗi không load được dữ liệu!');
  } finally {

  }
}

function* rootSaga() {
  console.log('hello saga');
  yield takeLatest(types.FETCH_DEVICES_HOME, watchHomeDevices);
  yield takeLatest(types.FETCH_DEVICES_LIST, watchListDevices);
  yield takeLatest(types.FETCH_CATEGORIES, watchListCategories);
  yield takeLatest(types.FETCH_DEVICES_DETAIL, watchDetailDevices);
  yield takeLatest(types.FETCH_DEVICES_BY_CATEGORY, watchListDevicesByCategory);
}
export default rootSaga;
// B1:thực thi action fetchListTask
// B2:Gọi API
// B3: Kiểm tra STATUS_CODE
//   Nếu thành công trả về ....
//   Nếu thất bại
// B4:Thực thi các công việc tiếp theo
// Fork(): sử dụng cơ chế non - blocking call trên function
// Call(): Gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết
// Take(): tạm dừng cho đến khi nhận được action
// Put(): Dùng để dispatch một action
// takeEvery(): Theo dõi một action nào đó thay đổi thì gọi một saga nào đó
// takeLastest() : Có nghĩa là nếu chúng ta thực hiện một loạt các actions, nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng
// yield(): Có nghĩa là chạy tuần tự khi nào trả ra kết quả mới thực thi tiếp
