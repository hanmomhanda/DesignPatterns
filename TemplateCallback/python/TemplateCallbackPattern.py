def process_file(file_path, init_value, callback):
    result = init_value
    file = None
    try:
        file = open(file_path, 'r')
        for line in file:
            result = callback(line[:len(line)-1], result) # '\n' 제거
        print(result)
    except FileNotFoundError as e:
        print(str(e))
    finally:
        file.close()


def run():
    file_path = "../data.txt"

    """
    Client 입장에서 파일을 다루면서도,
    try/excep/finally를 처리해주는 템플릿 메서드 덕분에
    biz 로직만 callback으로 템플릿에게 주입해주면 된다.
    """
    process_file(file_path, 0, lambda curr_val, prev_val: int(curr_val) + prev_val)

    process_file(file_path, 1, lambda curr_val, prev_val: int(curr_val) * prev_val)

    process_file(file_path, '', lambda curr_val, prev_val: curr_val + prev_val)

run()
