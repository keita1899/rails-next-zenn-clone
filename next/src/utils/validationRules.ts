export const validationRules = {
  email: {
    required: 'メールアドレスを入力してください。',
    pattern: {
      value:
        /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      message: '正しい形式のメールアドレスを入力してください。',
    },
  },
  password: {
    required: 'パスワードを入力してください。',
  },
  name: {
    required: 'ユーザー名を入力してください。',
  },
}
