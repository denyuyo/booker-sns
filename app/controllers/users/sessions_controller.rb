class SessionsController < ApplicationController
  def guest_sign_in //サインインさせて
    user = User.guest //ここでログイン状態にする
    sign_in user
    redirect_to user_path(user), notice: 'guestuserでログインしました。'
  end
end
