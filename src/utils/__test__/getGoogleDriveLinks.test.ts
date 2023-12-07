import getGoogleDriveLinks from '../getGoogleDriveLinks';

test('gets google drive links and outputs them as Links', () => {
	const testList = 'https://drive.google.com/file/d/1ykiIuA-Pb7Hu65wAot9YoYjF3uAdmKns/view?usp=drive_link, https://drive.google.com/file/d/11NaaQURB5LDhSenf_MnKridIncSnT64r/view?usp=drive_link, https://drive.google.com/file/d/1sG_i3tMajcj2o2CzMuDzdQcGHbhC-ns6/view?usp=drive_link, https://drive.google.com/file/d/1JvF1SAsfvomkjnQ6dXjrFvvGMIfe7H29/view?usp=drive_link, https://drive.google.com/file/d/1GS2LUY8eoRBy4bn2LITl-8imfhFWn1x5/view?usp=drive_link, https://drive.google.com/file/d/1SopEcUNWQSkHBRMGMb8bqKVHVAx_n_FN/view?usp=drive_link, https://drive.google.com/file/d/1nCjAwXj6qVFNcaST8wVO31Z_0wbpjRyh/view?usp=drive_link, https://drive.google.com/file/d/1mZMgPEO4wd4F1n8US9vUC_A2zVzLLLBf/view?usp=drive_link, https://drive.google.com/file/d/1EvroM2pCv35Z1BHeuiOgGoLfjKjZKIbi/view?usp=drive_link, https://drive.google.com/file/d/1lO3K-sY5DL7ykKFtjRhKBMnzewCxZKb9/view?usp=drive_link, https://drive.google.com/file/d/1l9gBn-IpjFNZFKpY0HRTj9oChanFGoE9/view?usp=drive_link, https://drive.google.com/file/d/1dNTmRuSaTh43lmuI0trVlxncS4CfrvfP/view?usp=drive_link, https://drive.google.com/file/d/1bSzOs4PIX_v1IcFRpfja6M8__Q2cAxk1/view?usp=drive_link, https://drive.google.com/file/d/1yUQRsn5_CUWkj-68Jk_tmlAXbNmQVXmJ/view?usp=drive_link, https://drive.google.com/file/d/1uTOD5XL50xtosLTaQrnsVm4A33YN_0H9/view?usp=drive_link';
  const links = getGoogleDriveLinks(testList);

  expect(links[1]).toEqual({
    id: '11NaaQURB5LDhSenf_MnKridIncSnT64r',
    href: 'https://drive.google.com/file/d/11NaaQURB5LDhSenf_MnKridIncSnT64r/view?usp=drive_link',
    src: 'https://drive.google.com/uc?id=11NaaQURB5LDhSenf_MnKridIncSnT64r'
  });
  expect(getGoogleDriveLinks('')).toEqual([]);
});
