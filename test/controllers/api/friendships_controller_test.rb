require 'test_helper'

class Api::FriendshipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_friendships_create_url
    assert_response :success
  end

  test "should get show" do
    get api_friendships_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_friendships_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_friendships_index_url
    assert_response :success
  end

end
