export function getUrl(path: string) {
	// 如果是外部連結，直接返回
	if (path.startsWith('http') || path.startsWith('//')) {
		return path
	}

	// 確保路徑開頭有斜線
	const cleanPath = path.startsWith('/') ? path : `/${path}`

	// 拼接 base 和路徑
	return `${import.meta.env.BASE_URL}${cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath}`
}
