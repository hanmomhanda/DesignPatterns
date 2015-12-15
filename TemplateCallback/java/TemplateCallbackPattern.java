package TemplateCallback.java;

import java.io.*;

public class TemplateCallbackPattern {

    public static void main(String[] args){
        String filePath ="TemplateCallback/java/data.txt";

        Template template = new Template();

        // Client 입장에서 파일을 다루면서도,
        // Template 덕분에 try/catch 같은 것을 신경 쓸 필요가 없다.
        // biz 로직만 callback으로 템플릿에게 주입해준다.
        template.processFileContents(filePath, 0, new CallBack<Integer>() {
            @Override
            public Integer processFileContents(String currVal, Integer prevVal) {
                return Integer.valueOf(currVal) + prevVal;
            }
        });

        // try/catch 불필요
        // 곱하기 로직을 callback으로 템플릿에게 주입
        template.processFileContents(filePath, new Long(1), new CallBack<Long>() {
            @Override
            public Long processFileContents(String currVal, Long prevVal) {
                return Long.valueOf(currVal) * prevVal;
            }
        });

        template.processFileContents(filePath, "", new CallBack<String>() {
            @Override
            public String processFileContents(String currVal, String prevVal) {
                return currVal + prevVal;
            }
        });
    }
}

class Template {
    /**
     * 파일 열기, 읽기, 자원반환, 예외 처리 등의 반복적인 항목은 템플릿에서 처리
     * 파일 내용의 처리는 callback에 위임
     *
     * @param filePath
     * @param initValue
     * @param callback
     */
    public <T> void processFileContents(String filePath, T initValue, CallBack<T> callback){
        BufferedReader br = null;
        T result = initValue;
        try {
            br = new BufferedReader(new FileReader(filePath));
            String line;
            while ((line = br.readLine()) != null){
                // 아래의 biz 로직을 callback에게 위임
                result = callback.processFileContents(line, result);
            }
            System.out.println(result);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

interface CallBack<T> {
    T processFileContents(String currVal, T prevVal);
}